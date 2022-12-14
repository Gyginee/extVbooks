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
    const doc = Http.get(url).html()
    var coverImg = doc.select(".detail-info img").first().attr("src");
    if (coverImg.startsWith("//")) {
        coverImg = "https:" + coverImg
    }
    return Response.success({
        name: doc.select("h1.title-detail").first().text(),
        cover: coverImg,
        author: doc.select(".author a").first().text(),
        description: doc.select(".detail-content p").html(),
        detail: doc.select(".list-info").html(),
        host: "http://nettruyen.dev",
        ongoing: doc.select(".detail-info .status").html().indexOf("Đang tiến hành") >= 0
    });
}