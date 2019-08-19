
class BubbleSort {

    public static void bubbleSort(int[] input) {
        for (int i = 0; i < input.length - 1; i++) {
            // swap
            boolean swapped = false;
            for (int j = 0; j < input.length-1; j++) {
                if (input[j] > input[j+1]) {
                    swapped = true;
                    int temp = input[j];
                    input[j] = input[j+1];
                    input[j+1] = temp;
                }
            }
            if(!swapped) {
                return;
            }
        }
    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + ", ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        //initialize
        int[] input = {10, 8, 1, 88, 64, 21, 19, 4, 3, 2};

        //sort
        bubbleSort(input);

        //print
        printArray(input);
    }

}
