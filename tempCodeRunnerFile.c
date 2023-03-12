#include<stdio.h>
#include<time.h>

void toh(int n, char from, char to, char middle){
	if (n == 0) return;
	toh(n-1, from, middle, to);
	printf("\n Move disk %d from rod %c to rod %c", n, from, to);
	toh(n-1, middle, to, from);
}

int main(){
    clock_t start = clock();
	toh(4, 'A', 'C', 'B');
    clock_t end = clock();

    printf("\nCPU time used : %f ",(double)(end-start));
}
