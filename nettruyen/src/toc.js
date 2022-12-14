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

     var el = doc.select("div.list-chapter li.row .chapter a")
    const data = [];
    for (var i = el.size() - 1; i >= 0 ; i--) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://www.nettruyen.dev"
        })
    }

    return Response.success(data);
}