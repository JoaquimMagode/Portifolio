// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public int linearSearch(int[] arr, int target){
    int n = 5;
    
    for(int i=0;i<=arr.length-1;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

    public static int binarySearch(int arr[], int target){
        int left = 0;
        int right = arr.length;
        
        while(left <= right){
            int mid = (left + right) / 2;
            
            if(arr[mid] == target){
                return mid;
            }else if(arr[mid] < target){
                return left = mid + 1;
            }else{
                return right = mid - 1;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        Main n = new Main();
        int[] arr = {1,9,3,5,6,9,4,8};
        int target = 5;
        
        int p = n.linearSearch(arr, target);
        int b = n.binarySearch(arr, target);    
        
        System.out.println("-Linear Search- "+p+" --");
        System.out.println("-Binary Search- "+b+" --");  
        
        for(int i=0;i<=arr.length-1;i++){
            System.out.print(" "+arr[i]);    
        }
        
    }
}
