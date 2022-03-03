package splitPhaseEx2;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.stream.Stream;

public class CalcOrderCountInJson {
    public static void main(String[] args) {
        try {
            System.out.println(run(args));
        } catch (Exception e) {
            System.err.println(e);
            System.exit(1);
        }
    }

    static long run(String[] args) throws IOException {
        if (args.length == 0) throw new RuntimeException("파일명을 입력하세요");
        CommandLine commandLine = new CommandLine();
        String filename = args[args.length - 1];
        return countOrders(commandLine, args, filename);
    }

    private static long countOrders(CommandLine commandLine, String[] args, String filename) throws IOException {
        File inputFile = CalcOrderCountInJson.getFile(filename);
        ObjectMapper mapper = new ObjectMapper();
        Order[] orders = mapper.readValue(inputFile, Order[].class);
        boolean onlyCountReady = Stream.of(args).anyMatch(arg -> "-r".equals(arg));
        if (onlyCountReady)
            return Stream.of(orders).filter(o -> "ready".equals(o.getStatus())).count();
        else
            return orders.length;
    }

    private static File getFile(String fileName) throws IOException {
        ClassLoader classLoader = CalcOrderCountInJson.class.getClassLoader();
        URL resource = classLoader.getResource(fileName);
        if (resource == null) {
            throw new IllegalArgumentException("file is not found!");
        } else {
            return new File(resource.getFile());
        }
    }

    private static class CommandLine {}
}
