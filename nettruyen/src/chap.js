function execute(url) {
    url = url.replace("nettruyen.com", "nettruyen.dev");
    url = url.replace("nettruyentop.com", "nettruyen.dev");
    url = url.replace("nettruyenvip.com", "nettruyen.dev");
    url = url.replace("nettruyenpro.com", "nettruyen.dev");
    url = url.replace("nettruyengo.com", "nettruyen.dev");
    url = url.replace("nettruyenmoi.com", "nettruyenqueen.com");
    url = url.replace("nettruyenone.com", "nettruyenqueen.com");
    url = url.replace("nettruyenco.com", "nettruyenqueen.com");
    url = url.replace("nettruyenme.com", "nettruyenqueen.com");
    url = url.replace("nettruyenin.com", "nettruyenqueen.com");
    url = url.replace("nettruyenon.com", "nettruyenqueen.com");
    url = url.replace("nettruyentv.com", "nettruyenqueen.com");
    var doc = Http.get(url).html();
    var el = doc.select(".page-chapter img");
    
    var data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var img = e.attr("data-original");
        if (!img) {
            img = e.attr("src");
        }

        if (img) {
            if (img.startsWith("//")) {
                img = "http:" + img;
            }
            data.push(img);
        }
    }
    return Response.success(data);
}