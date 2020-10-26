;
$(function () {
    var collCities = [
        ['选择城市'],
        ['海淀区', '朝阳区', '东城区', '西城区'],
        ['济南', '青岛', '烟台', '威海'],
        ['沈阳', '大连', '鞍山', '抚顺'],
        ['石家庄', '保定', '邯郸', '廊坊']
    ];
    $("#selid").on("change", function () {
        // 得到被选中的option的index
        let index = $(this).find("option:selected").index();
        // console.log($(this).find("option:selected").index());
        // console.log($(this));
        $("#subselid").empty()
        for (let i = 0; i < collCities[index].length; i++) {
            let content = collCities[index][i];
            $("#subselid").append("<option>" + content + "</option>");
        }

    })
});