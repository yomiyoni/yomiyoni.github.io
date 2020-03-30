function buildAlert({projectName, link, dueTime, projectImage, explain}) {
    return `<div class="pop-detail">
                <div class="pop-detail-scroll">
                    <i onclick="Swal.close()">
                        <span></span>
                        <span></span>
                    </i>
                    <p class="pop-tit">${projectName}</p>
                    <a href="${link}" class="pop-url" target="_blank">${projectName}</a>
                    <table class="pop-table">
                        <colgroup>
                            <col width="125px">
                            <col width="*">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>구분</th>
                                <td>RESPONSIVE</td>
                            </tr>
                            <tr>
                                <th>기여도</th>
                                <td>퍼블리싱 100%</td>
                            </tr>
                            <tr>
                                <th>작업 소요기간</th>
                                <td>약 ${dueTime}일</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul class="pop-cnt">
                        ${explain}
                    </ul>
                    <div class="pop-img">
                        <img src="${projectImage}" alt="프로젝트 이미지">
                    </div>
                </div>
            </div>`.replace(/\r?\n|\r/g,'');
}

function _alert({title, projectName, dueTime, projectLink, projectImage, explain}) {
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html : buildAlert({
            'projectName' : projectName,
            'dueTime' : dueTime,
            'link' : projectLink,
            'projectImage' : projectImage,
            'explain' : explain,
        }),
        showConfirmButton : false,
    });
}

$(document).ready(function(e) {
    let opt = {
        mirCoin : {
            title : '미르코인',
            link : 'http://www.naver.com',
            projectName : '미르코인',
            projectImage : 'https://i.ytimg.com/vi/JaZah8k8Thg/maxresdefault.jpg',
            dueTime : '10',
            explain: `<li>asdfasdf</li>
                    <li>asdfasdf</li>
                    <li>asdfasdf</li>
                    <li>asdfasdf</li>`,
        },
        mirCoinsadf : {
            title : '미르코인123123',
            link : 'http://www.naver.com',
            projectName : '123123213',
            projectImage : 'https://i.ytimg.com/vi/JaZah8k8Thg/maxresdefault.jpg',
            dueTime : '10',
            explain: `<li>asdfasdf</li>
                    <li>asdfasdf</li>
                    <li>asdfasdf</li>
                    <li>asdfasdf</li>`,
        },
    };


    $('.post-card').on('click', function(e){
        e.preventDefault();
        _alert(opt[$(this).attr('data-postInfo')]);
    });
    
    $('#about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#_card').offset().top
        }, 500);
    });
    
});