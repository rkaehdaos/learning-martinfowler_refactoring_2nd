package splitPhaseEx2;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;



import static org.assertj.core.api.Assertions.*;


class CalcOrderCountInJsonTest {

    @Test
    @Disabled
    void errrorTest() throws Exception {

        assertThatThrownBy(() -> CalcOrderCountInJson.main(new String[]{}))
                ;

    }

    @Test
    @DisplayName("r이 없으면 전체 개수 5개")
    void test1() throws Exception {
        //given
        CalcOrderCountInJson.main(new String[]{"testData.json"});
        
        //when
        
        //then
    }

    @Test
    @DisplayName("r이 있으면 ready 3개")
    void test2() throws Exception {
        //given

        String[] args = {"-r", "testData.json"};
        CalcOrderCountInJson.main(args);

        //when

        //then
    }

}