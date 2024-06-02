import java.util.*;


public class Hash {
    public static void main(String[] args){
        LinkedHashMap<String, Integer> map = new LinkedHashMap<>();
        //insertion

        map.put("india",120);
        map.put("us",40);
        map.put("chin",90);
        StringBuilder jsonBuilder = new StringBuilder("{");
        Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<String, Integer> entry = iterator.next();
            String key = entry.getKey();
            Integer value = entry.getValue();
            jsonBuilder.append("\"").append(key).append("\":").append(value);
            if (iterator.hasNext()) {
                jsonBuilder.append(",");
            }
        }
        jsonBuilder.append("}");

        String jsonString = jsonBuilder.toString();
        System.out.println(jsonString);
        
    }
}
