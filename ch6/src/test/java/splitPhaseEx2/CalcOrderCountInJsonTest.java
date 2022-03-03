package splitPhaseEx2;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class CalcOrderCountInJsonTest {


    @Test
    @DisplayName("r이 없으면 전체 개수 5개")
    void test1() throws Exception {
        assertThat(CalcOrderCountInJson.run(new String[]{"testData.json"})).isEqualTo(5);
    }

    @Test
    @DisplayName("r이 있으면 ready 3개")
    void test2() throws Exception {
        assertThat(CalcOrderCountInJson.run(new String[]{"-r", "testData.json"})).isEqualTo(3);
    }

}