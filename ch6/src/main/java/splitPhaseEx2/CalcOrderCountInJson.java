package splitPhaseEx2;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.stream.Stream;

public class CalcOrderCountInJson {
    public static void main(String[] args) {
        try {

            if(args.length==0) throw new RuntimeException("파일명을 입력하세요");
            String filename = args[args.length - 1];
            File inputFile = CalcOrderCountInJson.getFile(filename);

            ObjectMapper mapper = new ObjectMapper();
            Order[] orders = mapper.readValue(inputFile, Order[].class);
            if (Stream.of(args).anyMatch(arg -> "-r".equals(arg)))
                System.out.println(Stream.of(orders)
                        .filter(o -> "ready".equals(o.getStatus()))
                        .count());
            else
                System.out.println(orders.length);

        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    public static File getFile(String fileName) throws IOException {
        ClassLoader classLoader = CalcOrderCountInJson.class.getClassLoader();
        URL resource = classLoader.getResource(fileName);
        if (resource == null) {
            throw new IllegalArgumentException("file is not found!");
        } else {
            return new File(resource.getFile());
        }
    }
}
