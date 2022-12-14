function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "https://nettruyen.dev/truyen-tranh/?m_orderby=latest", script: "gen.js"},
        {title: "Truyện mới", input: "https://nettruyen.dev/truyen-tranh/?m_orderby=new-manga", script: "gen.js"},
        {title: "Top all", input: "https://nettruyen.dev/truyen-tranh/?m_orderby=views", script: "gen.js"},
        {title: "Top tháng", input: "https://nettruyen.me/truyen-tranh/?m_orderby=trending&timerange=month", script: "gen.js"},
        {title: "Top tuần", input: "https://nettruyen.me/truyen-tranh/?m_orderby=trending", script: "gen.js"},
        {title: "Top ngày", input: "https://nettruyen.me/truyen-tranh/?m_orderby=trending&timerange=day", script: "gen.js"},
        
    ]);
}