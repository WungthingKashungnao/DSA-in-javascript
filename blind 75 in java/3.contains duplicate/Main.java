import java.util.*;
class Main{
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[] {1,2,3,4}));
    }

     public static  boolean containsDuplicate(int[] nums){
        Set<Integer>visited = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            if(visited.contains(nums[i])){
                return true;
            }else{
                visited.add(nums[i]);
            }
        }
        return false;
    }
    
}