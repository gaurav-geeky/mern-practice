#include <iostream>
using namespace std;

void bubbles(int arr[], int s)
{

    int tmp, c = 0;
    bool d;

    for (int i = 0; i < s; i++)
    {
        d = false;
        for (int j = 0; j < s - i - 1; j++)
        {
            c++;
            if (arr[j] > arr[i])
            {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                d = true;
            }
           
        }
        if (d == false)
        {
            break;
        }
    }
     cout << arr[i] << " ";
    cout << "\n counter hit = " << c << "\n";
}

int main()
{
    int arr[5] = {4, 1, 7, 5, 2};
    bubbles(arr, 5);
}