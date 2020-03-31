function buildAlert({company, link, dueTime, projectImage, explain, contribute,division}) {
    return `<div class="pop-detail">
                <div class="pop-detail-scroll">
                    <i onclick="Swal.close()">
                        <span></span>
                        <span></span>
                    </i>
                   
                   
                    <table class="pop-table">
                        <colgroup>
                            <col width="125px">
                            <col width="*">
                        </colgroup>
                        <tbody>
                         <tr>
                            <th>주소</th>
                            <td> <a href="${link}" class="pop-url" target="_blank">${link}</a></td>
                          </tr>
                          <tr>
                          <th>회사</th>
                          <td>${company}</td>
                      </tr>
                            <tr>
                                <th>구분</th>
                                <td>${division}</td>
                            </tr>
                            <tr>
                                <th>기여도</th>
                                <td>${contribute}</td>
                            </tr>
                            <tr>
                                <th>작업 소요기간</th>
                                <td>약 ${dueTime}</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul class="pop-cnt">
                        ${explain}
                    </ul>
                   
                    ${projectImage} 
                </div>
            </div>`.replace(/\r?\n|\r/g,'');
}

function _alert({title, company, dueTime, projectLink, projectImage, explain, contribute, division}) {
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html : buildAlert({
            'company' : company,
            'dueTime' : dueTime,
            'link' : projectLink,
            'projectImage' : projectImage,
            'explain' : explain,
            'contribute' : contribute,
            'division' : division
        }),
        showConfirmButton : false,
    });
}

$(document).ready(function(e) {
    let opt = {
        pop001 : {
            title : '미르코인',
            projectLink : 'http://mircoin.io/',
            company : '미르코인',
            division: '적응형',
            contribute: 'html 100%, css 100%, jquery 100%, 간단한 php 100%',
            dueTime : '2주',
            explain: 
            `
            <li>HTTP_USER_AGENT를 사용해 디바이스 체크를 통해 pc와 모바일 구분</li>
            <li>jquery와 스크롤함수를 통해 무한스크롤 구현</li>
            <li>css를 이용해 애니메이션 연출</li>
            `
            ,
            projectImage : 
            `
            <div class="pop-img">
            <p>이미지1</p>
            <img src="./theme/img/mircoin/page001.jpg" alt="프로젝트 이미지">
            <p>이미지2</p>
            <img src="./theme/img/mircoin/page002.jpg" alt="프로젝트 이미지">
            <p>이미지3</p>
            <img src="./theme/img/mircoin/page003.jpg" alt="프로젝트 이미지">
            </div>
            `
            ,
        },
        pop002 : {
            title : '블록체인미르',
            projectLink : 'http://www.blockchainmir.com/index.php',
            company : '미르코인',
            division: '반응형',
            contribute: 'html 100%, css 100%, jquery 100%',
            dueTime : '1주',
            explain: 
            `
            <li>jquery.onepage-scroll.js 사용</li>
            <li>php 페이지 모듈화를 통해 자주 사용하는 부분 전체에서 사용할 수 있게 적용</li>
            `
            ,
            projectImage : 
            `
            <div class="pop-img">
            <img src="./theme/img/blockChainMir/page002.png" alt="프로젝트 이미지">
            </div>
            `
            ,
        },
        pop003 : {
          title : '미르랜드 웹지갑',
          projectLink : 'https://play.google.com/store/apps/details?id=mirland.mobile ',
          company : '미르코인',
          division: '모바일',
          contribute: 'html 100%, css 100%, jquery 100%, 간단한 php 개발 및 수정 조금',
          dueTime : '8개월',
          explain: 
          `
          <li>미르랜드, 기프티쇼, 미르랜드 무비, 관리자 페이지 만듦</li>
          <li>php 페이지 모듈화를 통해 자주 사용하는 부분 전체에서 사용할 수 있게 적용</li>
          <li>텍스트 복사붙여넣기 기능</li>
          `
          ,
          projectImage : 
          `
          <div class="pop-img">
          <p>미르랜든웹지갑</p>
          <img src="./theme/img/mirLand/page002.jpg" class="m_p_img" alt="프로젝트 이미지">
          <img src="./theme/img/mirLand/page003.jpg" class="m_p_img" alt="프로젝트 이미지">
          <img src="./theme/img/mirLand/page004.jpg" class="m_p_img" alt="프로젝트 이미지">
          <p>미르랜든 기프티쇼</p>
          <img src="./theme/img/mirLand/page005.jpg" class="m_p_img" alt="프로젝트 이미지">
          <img src="./theme/img/mirLand/page006.jpg" class="m_p_img" alt="프로젝트 이미지">
          <img src="./theme/img/mirLand/page008.jpg" class="m_p_img" alt="프로젝트 이미지">
          </div>
          `
          ,
        },
          pop004 : {
            title : '능률 디지털교과서(김성곤 저)',
            projectLink : 'https://www.neteacher.co.kr/2015/en/m_eng2_kim_01.asp',
            company : '아람멀티미디어',
            division: 'xhtml, 휴대기기 반응형',
            contribute: '동일한 기능의 신규 교과서 퍼블리싱 및 유지보수',
            dueTime : '2개월',
            explain: 
            `
            <li>내부서버가 사라져서 코드 확인이 어렵습니다. 화면이 반영된 클라이언트 주소 첨부합니다.</li>
            <li>중학교 3학년책 8단원 신규작업 중 5단원 전체 1인 진행. 나머지 단원은 백업 받음</li>
            <li>jquery 간단한 기능 유지보수</li>
            <li>javascript 간단한 기능 유지보수</li>
            `
            ,
            projectImage : 
            `
            <div class="pop-img">
            <img src="./theme/img/aram/page003.jpg" alt="프로젝트 이미지">
            </div>
            `
            ,
      },

      pop005 : {
        title : '동양북스 GOGO바둑마스터',
        projectLink : 'https://www.dongyangbooks.com/tv/gogo_baduck/sample/index.asp',
        company : '아람멀티미디어',
        division: 'xhtml, 휴대기기 반응형',
        contribute: '동일한 기능의 신규 교과서 퍼블리싱 및 유지보수',
        dueTime : '2개월',
        explain: 
        `
        <li>내부서버가 사라져서 코드 확인이 어렵습니다. 화면이 반영된 클라이언트 주소 첨부합니다.(유닛1만 확인가능)</li>
        <li>입문 4단원 ~ 초급 전 단원 작업</li>
        <li>jquery 간단한 기능 유지보수</li>
        <li>javascript 간단한 기능 유지보수</li>
        `
        ,
        projectImage : 
        `
        <div class="pop-img">
        <p>이미지1</p>
        <img src="./theme/img/aram/page004.png" alt="프로젝트 이미지">
        <p>이미지2</p>
        <img src="./theme/img/aram/page005.png" alt="프로젝트 이미지">
        <p>이미지3</p>
        <img src="./theme/img/aram/page006.png" alt="프로젝트 이미지">
        </div>
        `
        ,
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