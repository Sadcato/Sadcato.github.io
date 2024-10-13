//get����
$.ajax({
    type: 'get',
    url: 'https://apis.map.qq.com/ws/location/v1/ip',
    data: {
        key: 'UQ2BZ-76BC4-346UJ-KMIZN-ECZNH-UOFXJ',
        output: 'jsonp',
    },
    dataType: 'jsonp',
    success: function (res) {
        ipLoacation = res;
    }
})
function getDistance(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

function showWelcome() {

    let dist = getDistance(113.34499552, 23.15537143, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //���ﻻ���Լ��ľ�γ��
    let pos = ipLoacation.result.ad_info.nation;
    let ip;
    let posdesc;
    //���ݹ��ҡ�ʡ�ݡ�������Ϣ�Զ��延ӭ��
    switch (ipLoacation.result.ad_info.nation) {
        case "�ձ�":
            posdesc = "���������һ��ȥ��ӣ����";
            break;
        case "����":
            posdesc = "Let us live in peace!";
            break;
        case "Ӣ��":
            posdesc = "��ͬ��һ��ҹ���׶���";
            break;
        case "����˹":
            posdesc = "������ƿ���ؼӣ�";
            break;
        case "����":
            posdesc = "C'est La Vie";
            break;
        case "�¹�":
            posdesc = "Die Zeit verging im Fluge.";
            break;
        case "�Ĵ�����":
            posdesc = "һ��ȥ�󱤽��ɣ�";
            break;
        case "���ô�":
            posdesc = "ʰ��һƬ��Ҷ������";
            break;
        case "�й�":
            pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
            ip = ipLoacation.result.ip;
            switch (ipLoacation.result.ad_info.province) {
                case "������":
                    posdesc = "��������������ӭ��~~~";
                    break;
                case "�����":
                    posdesc = "���������ɡ�";
                    break;
                case "�ӱ�ʡ":
                    posdesc = "ɽ��ΡΡ�ɱ��ݣ������۹ء���������ɴ������޽�ɽ��";
                    break;
                case "ɽ��ʡ":
                    posdesc = "չ�����߳����ߣ���ռɽ������ࡣ";
                    break;
                case "���ɹ�������":
                    posdesc = "��Բԣ�Ұãã���紵�ݵͼ�ţ��";
                    break;
                case "����ʡ":
                    posdesc = "����Կ����ܣ�";
                    break;
                case "����ʡ":
                    posdesc = "״Ԫ����Ƕ����տ�֮����";
                    break;
                case "������ʡ":
                    posdesc = "��ϲ�����������Ժ��";
                    break;
                case "�Ϻ���":
                    posdesc = "������֪���й�ֻ���������С�";
                    break;
                case "����ʡ":
                    switch (ipLoacation.result.ad_info.city) {
                        case "�Ͼ���":
                            posdesc = "������ͦ��ȥ�ĳ�������";
                            break;
                        case "������":
                            posdesc = "�������ã������պ���";
                            break;
                        default:
                            posdesc = "ɢװ�Ǳ���Ҫɢװ�ġ�";
                            break;
                    }
                    break;
                case "�㽭ʡ":
                    posdesc = "���罥�������������ѻ���δ�Ϲ顣";
                    break;
                case "����ʡ":
                    switch (ipLoacation.result.ad_info.city) {
                        case "֣����":
                            posdesc = "ԥ��֮�����֮�С�";
                            break;
                        case "������":
                            posdesc = "�������£��������������������Ǳ�������";
                            break;
                        case "פ������":
                            posdesc = "�������ʯ��ʯʯЮ���������ɽ�Ļ�����Ŷ��";
                            break;
                        case "������":
                            posdesc = "�������������졣";
                            break;
                        case "������":
                            posdesc = "����ĵ�������¡�";
                            break;
                        default:
                            posdesc = "�ɷ����Ʒ�����ϻ�������";
                            break;
                    }
                    break;
                case "����ʡ":
                    posdesc = "����ס�ˣ��ߺ���ɡ�";
                    break;
                case "����ʡ":
                    posdesc = "���ذ��Ƽ䣬�ҳ�Զ��ɽ��";
                    break;
                case "����ʡ":
                    posdesc = "��ϼ�������ɣ���ˮ������һɫ��";
                    break;
                case "ɽ��ʡ":
                    posdesc = "ң�����ݾŵ��̣�һ����ˮ����к��";
                    break;
                case "����ʡ":
                    posdesc = "�����ȸ��棡";
                    break;
                case "����ʡ":
                    posdesc = "74751����ɳ˹���ˡ�";
                    break;
                case "�㶫ʡ":
                    posdesc = "�ϰ������︣���ˡ�";
                    break;
                case "����׳��������":
                    posdesc = "����ɽˮ�����¡�";
                    break;
                case "����ʡ":
                    posdesc = "�����ճ�����ˣ�Ϧ��������ϼ�⡣";
                    break;
                case "�Ĵ�ʡ":
                    posdesc = "���������ӡ�";
                    break;
                case "����ʡ":
                    posdesc = "ę́��ѧ��������200��";
                    break;
                case "����ʡ":
                    posdesc = "���������Ʋ��ƣ��������ֱ���졣";
                    break;
                case "����������":
                    posdesc = "����ãã��ԭ�ϣ��������졣";
                    break;
                case "����ʡ":
                    posdesc = "������������ɡ�";
                    break;
                case "����ʡ":
                    posdesc = "Ǽ�Ѻ���Թ���������粻�����Źء�";
                    break;
                case "�ຣʡ":
                    posdesc = "ţ��ɺ������̶��úóԡ�";
                    break;
                case "���Ļ���������":
                    posdesc = "��Į����ֱ����������Բ��";
                    break;
                case "�½�ά���������":
                    posdesc = "����ŵ�˿��·�����������ƺ��硣";
                    break;
                case "̨��ʡ":
                    posdesc = "������ͷ����½����ͷ��";
                    break;
                case "����ر�������":
                    posdesc = "�������в����ع�����ӭ���������";
                    break;
                case "�����ر�������":
                    posdesc = "�Ըкɹ٣����߷��ơ�";
                    break;
                default:
                    posdesc = "����ȥ��ĳ��й��ɣ�";
                    break;
            }
            break;
        default:
            posdesc = "����ȥ��Ĺ��ҹ��ɡ�";
            break;
    }

    //���ݱ���ʱ���л���ӭ��
    let timeChange;
    let date = new Date();
    if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>�����</span>��һ��֮�����ڳ���";
    else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>�����</span>����������緹�ˡ�";
    else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>�����</span>��������˯������ɣ�";
    else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>���㼸��</span>��һ������ѽ��";
    else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>Ϧ�����޺ã�</span>";
    else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>���Ϻ�</span>��ҹ������������";
    else timeChange = "ҹ���ˣ������Ϣ���ٰ�ҹ��";

    try {
        //�Զ����ı�����Ҫ�ŵ�λ��
        document.getElementById("welcome-info").innerHTML =
            `<b><center>? ��ӭ��Ϣ ?</center>&emsp;&emsp;��ӭ���� <span style="color:var(--theme-color)">${pos}</span> ��С��飬${timeChange}�����ھ���վ��Լ <span style="color:var(--theme-color)">${dist}</span> �����ǰ��IP��ַΪ�� <span style="color:var(--theme-color)">${ip}</span>�� ${posdesc}</b>`;
    } catch (err) {
        // console.log("Pjax�޷���ȡ#welcome-infoԪ��???")
    }
}
window.onload = showWelcome;
// ���ʹ����pjax�ڼ����������д���
document.addEventListener('pjax:complete', showWelcome);
