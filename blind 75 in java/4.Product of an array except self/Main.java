import java.util.Arrays;

class Main {

    public static void main(String[] args){
        System.out.println(Arrays.toString(productExceptSelf(new int[] {1,2,3,4})));
    }
    public static int[] productExceptSelf(int[] nums){
        int[] result = new int[nums.length];
        Arrays.fill(result,1);//this will fill the result array with the value 1
        int pre=1, post=1;
        for(int i=0;i<nums.length;i++){
            result[i]=pre;
            pre=nums[i]*pre;
        }
        for(int i=nums.length-1;i>=0;i--){
            result[i]=result[i]*post;
            post= post*nums[i];
        }
        return result;
    }
}
