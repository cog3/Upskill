public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        loop();
        System.out.println(palindrome("racecar"));

    }

    public static void loop()
    {
        float[] theVals = new float[3];
        theVals[0] = 10.9f;
        theVals[1] = 10.9f;
        theVals[2] = 10.9f;
        for (float g : theVals) {
            System.out.println(g);
        }
    }

    public static boolean palindrome(String word)
    {
        String clean = word.replaceAll("\\s+", "").toLowerCase();
        int length = clean.length();
        int forward = 0;
        int backward = length - 1;
        while (backward > forward) {
            char forwardChar = clean.charAt(forward++);
            char backwardChar = clean.charAt(backward--);
            if (forwardChar != backwardChar)
                return false;
        }
        return true;
    }
}
