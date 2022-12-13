// pages/Buy.js 
import queryString from 'query-string';

const Buy = ({location}) => {
    //location을 구조분해 할당 받아서 search라는 방에 있는 문자열 확인하기
    console.log(location.search);

    //query 문자열(ex : ?code=3&name=coffee.. )에서 object type으로 만들기
    //query-string 라이브러리 다운받기 
    const parsed = queryString.parse(location.search);
    console.log(parsed);

    const buyStyle={
        backgroundColor:"#cecece", 
        height:"300px"
    };

    return(
        <div style={buyStyle}>
            <h3>buy 페이지입니다. </h3>
            <p><strong>{parsed.code}</strong>번 상품 
                <strong>{parsed.name}</strong>을 부문하였습니다.</p>
        </div>
    );
}
export default Buy;