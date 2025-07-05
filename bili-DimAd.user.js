// ==UserScript==
// @name         biliplus-DimAd
// @namespace    https://hangeai.com/
// @version      v1.0.1.20250705
// @description  为B站首页视频卡片添加推广标记，方便识别广告内容。若发现功能失效, 请更新到最新版本。 
// @author       hangeai
// @website      https://hangeai.com/
// @source       https://github.com/hangeai/biliplus
// @downloadURL  https://raw.githubusercontent.com/hangeai/biliplus/main/bili-DimAd.user.js
// @updateURL    https://raw.githubusercontent.com/hangeai/biliplus/main/bili-DimAd.user.js
// @match        https://www.bilibili.com/
// @icon         https://www.bilibili.com/favicon.ico
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function LOG(...args) {
        console.log(`[biliplus]`, ...args);
    }

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .promotion-marker {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(100, 100, 100, 0.85);
            color: yellow;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            z-index: 1;
            cursor: pointer;
            transition: opacity 0.3s;
        }
        .bili-video-card:hover .promotion-marker {
            opacity: 0;
            z-index: -1;
        }
    `;
    document.head.appendChild(style);

    // 处理单个视频卡片
    function processVideoCard(card) {
        // 避免重复添加
        if (card.querySelector('.promotion-marker')) {
            LOG('跳过重复处理', card);
            return;
        }

        const link = card.querySelector('.bili-video-card__image--link');
        if (!link) {
            return;
        }

        const href = link.getAttribute('href');
        const promotion = !(href && href.startsWith('https://www.bilibili.com/'));
        if (promotion) {
            LOG('发现推广: ', href ? href.substring(0, 50) : '无链接');
            const marker = document.createElement('div');
            marker.className = 'promotion-marker';
            marker.textContent = '推广';
            card.style.position = 'relative'; // 确保卡片是relative定位以便正确覆盖
            card.appendChild(marker);
        }
    }

    // 处理所有视频卡片
    function processAllVideoCards(cards) {
        cards.forEach(processVideoCard);
    }

    // 配置并启动观察器: 处理动态加载的视频卡片
    const root = document.querySelector('div.container.is-version8');
    if (root) {
        const observer = new MutationObserver((mutations) => {
            const cardsToProcess = new Set();
            mutations.forEach((mutation) => {
                Array.from(mutation.addedNodes).forEach(node => {
                    // 1 = Element 节点（例如 <div>、<p>、<span> 等 HTML 元素）
                    if (node.nodeType !== 1 || node.tagName !== "DIV") {
                        return;
                    }

                    // 检查节点本身是否是目标卡片
                    if (node.classList.contains('bili-video-card')) {
                        cardsToProcess.add(node);
                        return;
                    }

                    // 检查节点是否包含目标卡片
                    if (node.classList.contains('feed-card') || node.classList.contains('bili-feed-card')) {
                        const child = node.querySelector('div.bili-video-card');
                        if (child) {
                            cardsToProcess.add(child);
                        }
                    }
                });
            });
            processAllVideoCards(cardsToProcess);
        });
        observer.observe(root, {
            childList: true,
            subtree: false  // 监控直接子元素, 保持低开销, 这是高性能的关键, 不要修改这一行代码
        });
    }

    // 初始处理
    processAllVideoCards(document.querySelectorAll('div.bili-video-card'));
    // TODO: 'div.video-card-ad-small';
})();

