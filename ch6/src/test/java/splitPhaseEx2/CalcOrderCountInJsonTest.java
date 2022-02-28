package splitPhaseEx2;

import org.junit.jupiter.api.Disabled;
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
    void test1() throws Exception {
        //given
        CalcOrderCountInJson.main(new String[]{"testData.json"});
        
        //when
        
        //then
    }

}