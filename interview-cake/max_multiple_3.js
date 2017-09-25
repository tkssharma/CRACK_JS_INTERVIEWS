in array of integers of size n */
int maxProduct(int arr[], int n)
{
 // if size is less than 3, no triplet exists
 if (n < 3)
		 return -1;

 // will contain max product
 int max_product = INT_MIN;

 for (int i = 0; i < n - 2; i++)
		 for (int j = i + 1; j < n - 1; j++)
				 for (int k = j + 1; k < n; k++)
						 max_product = max(max_product,
										 arr[i] * arr[j] * arr[k]);

 return max_product;
}
