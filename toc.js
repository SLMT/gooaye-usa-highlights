// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html">卷頭說明</a></li><li class="chapter-item expanded "><a href="pinned/index.html">置頂精華</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="pinned/common-questions.html">每日一問</a></li><li class="chapter-item expanded "><a href="pinned/telegram-tutorial.html">Telegram 使用教學</a></li><li class="chapter-item expanded "><a href="pinned/commonly-used-websites.html">常用網站連結</a></li><li class="chapter-item expanded "><a href="pinned/wtf-it-is.html">J 是啥？</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week41/index.html">2020 年第 41 週 (10/5~10/11)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week41/sell-growing-stock.html">停利飆股方式分享</a></li><li class="chapter-item expanded "><a href="2020-week41/pton.html">PTON</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week39/index.html">2020 年第 39 週 (9/21~9/27)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week39/unity-advantages.html">Unity 遊戲引擎優勢</a></li><li class="chapter-item expanded "><a href="2020-week39/ft-to-td.html">FT 轉 TD</a></li><li class="chapter-item expanded "><a href="2020-week39/joyce-share-rds.html">Joyce 大分享 RDS 經驗</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week38/index.html">2020 年第 38 週 (9/14~9/20)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week38/hon.html">HON</a></li><li class="chapter-item expanded "><a href="2020-week38/nvidia-arm-intel.html">NVDIA 拿下 ARM 對 Intel 影響</a></li><li class="chapter-item expanded "><a href="2020-week38/video-recon-vs-lidar.html">影像辨識 vs Lidar</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week37/index.html">2020 年第 37 週 (9/07~9/13)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week37/crwd-report.html">CRWD 財報分享</a></li><li class="chapter-item expanded "><a href="2020-week37/joe-budden-vs-spotify.html">Joe Budden 宣布與 Spotify 解除合約</a></li><li class="chapter-item expanded "><a href="2020-week37/short-when-dropping.html">跌的時候該空嗎？</a></li><li class="chapter-item expanded "><a href="2020-week37/slack.html">Slack</a></li><li class="chapter-item expanded "><a href="2020-week37/sharing-some-important-trends.html">群友分享部份美股今年價格重點變化</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week36/index.html">2020 年第 36 週 (8/31~9/06)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week36/graphcore.html">Graphcore</a></li><li class="chapter-item expanded "><a href="2020-week36/macroeconomics.html">總體經濟</a></li><li class="chapter-item expanded "><a href="2020-week36/marijuana.html">大麻股標的</a></li><li class="chapter-item expanded "><a href="2020-week36/all-buy-sp500.html">每個人都買 S&amp;P 500 會發生啥事？</a></li><li class="chapter-item expanded "><a href="2020-week36/shll.html">SHLL</a></li><li class="chapter-item expanded "><a href="2020-week36/sub-brokerage.html">複委託手續費</a></li><li class="chapter-item expanded "><a href="2020-week36/ft-cash-out.html">FT 出金手續費</a></li><li class="chapter-item expanded "><a href="2020-week36/etf-bonds.html">ETF 避險與債券</a></li><li class="chapter-item expanded "><a href="2020-week36/transfer-money.html">電匯到國外券商</a></li><li class="chapter-item expanded "><a href="2020-week36/spot.html">SPOT</a></li><li class="chapter-item expanded "><a href="2020-week36/0903-big-drop-etoro.html">9/3 美股崩盤之鮪魚又爆炸啦</a></li><li class="chapter-item expanded "><a href="2020-week36/adp.html">非農與 ADP 就業的差別</a></li><li class="chapter-item expanded "><a href="2020-week36/tqqq-vs-nvda.html">TQQQ vs NVDA</a></li><li class="chapter-item expanded "><a href="2020-week36/tsla-split.html">TSLA 拆分後分析</a></li><li class="chapter-item expanded "><a href="2020-week36/vti-or-voo.html">主委：VOO 沒特斯拉</a></li></ol></li><li class="chapter-item expanded "><a href="2020-week35/index.html">2020 年第 35 週 (8/24~8/30)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2020-week35/eric-cdn-share.html">Eric 大的 CDN 分享</a></li><li class="chapter-item expanded "><a href="2020-week35/etoro-cash-out.html">eToro 出金分享</a></li><li class="chapter-item expanded "><a href="2020-week35/td-open.html">TD 開戶</a></li><li class="chapter-item expanded "><a href="2020-week35/us-citibank.html">台灣人在美國花旗開戶</a></li><li class="chapter-item expanded "><a href="2020-week35/tracking-earning.html">如何追蹤長期績效</a></li><li class="chapter-item expanded "><a href="2020-week35/run-when-see-drop.html">主委：選前若見到修正就要先跑了</a></li><li class="chapter-item expanded "><a href="2020-week35/good-for-ib.html">IB 好處</a></li><li class="chapter-item expanded "><a href="2020-week35/dont-sell-when-high.html">主委：創新高絕對不賣 &amp; BIGC</a></li><li class="chapter-item expanded "><a href="2020-week35/docu.html">DOCU</a></li><li class="chapter-item expanded "><a href="2020-week35/rost.html">ROST</a></li><li class="chapter-item expanded "><a href="2020-week35/ft-buy-power.html">FT 現金購買力與現金結餘的差別？</a></li><li class="chapter-item expanded "><a href="2020-week35/symbols.html">本週被提及的標的</a></li><li class="chapter-item expanded "><a href="2020-week35/nvda-advantages.html">NVDA 的優勢</a></li><li class="chapter-item expanded "><a href="2020-week35/how-to-read-report.html">財報怎麼看</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
