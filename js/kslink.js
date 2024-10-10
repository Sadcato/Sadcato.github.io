var leonus = {
    linkCom: e => {
        var t = document.getElementById("link-info");
        document.getElementById("link-form").style.display = "block";
        "bf" == e ? (t.value = "```yml\n", t.value += "- name: \n  link: \n  avatar: \n  descr: \n  siteshot: ", t.value += "\n```", t.setSelectionRange(15, 15)) : (t.value = "վ�����ƣ�\nվ���ַ��\nͷ�����ӣ�\nվ��������\nվ���ͼ��", t.setSelectionRange(5, 5)), t.focus()
    },
    submitLink: () => {
        var linkInfo = document.getElementById("link-info").value;
        // ����Ӧ�÷���linkInfo��������
        // Ϊ����ʾ,����ֻ�ǽ������ӵ�ҳ��
        var container = document.getElementById("friend-link-container");
        var newLink = document.createElement("div");
        newLink.textContent = linkInfo;
        container.appendChild(newLink);
        // ��ղ����ر���
        document.getElementById("link-info").value = "";
        document.getElementById("link-form").style.display = "none";
    },
    owoBig: () => {
        if (!document.getElementById("post-comment") || document.body.clientWidth < 768) return;
        let e = 1,
            t = "",
            o = document.createElement("div"),
            n = document.querySelector("body");
        o.id = "owo-big", n.appendChild(o), new MutationObserver((l => {
            for (let a = 0; a < l.length; a++) {
                let i = l[a].addedNodes,
                    s = "";
                if (2 == i.length && "OwO-body" == i[1].className) s = i[1];
                else {
                    if (1 != i.length || "tk-comment" != i[0].className) continue;
                    s = i[0]
                }
                s.onmouseover = l => {
                    e && ("OwO-body" == s.className && "IMG" == l.target.tagName || "tk-owo-emotion" == l.target.className) && (e = 0, t = setTimeout((() => {
                        let e = 3 * l.path[0].clientHeight,
                            t = 3 * l.path[0].clientWidth,
                            a = l.x - l.offsetX - (t - l.path[0].clientWidth) / 2,
                            i = l.y - l.offsetY;
                        a + t > n.clientWidth && (a -= a + t - n.clientWidth + 10), a < 0 && (a = 10), o.style.cssText = `display:flex; height:${e}px; width:${t}px; left:${a}px; top:${i}px;`, o.innerHTML = `<img src="${l.target.src}">`
                    }), 300))
                }, s.onmouseout = () => {
                    o.style.display = "none", e = 1, clearTimeout(t)
                }
            }
        })).observe(document.getElementById("post-comment"), {
            subtree: !0,
            childList: !0
        })
    },
};