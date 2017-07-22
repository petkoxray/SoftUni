using System;
using System.Linq;

class EqualSums
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

        bool isEqual = false;

        if (numbers.Length == 1)
        {
            Console.WriteLine("0");

            return;
        }

        for (int i = 0; i < numbers.Length; i++)
        {
            int leftSum = GetLeftSum(numbers,i);
            int rightSum = GetRighSum(numbers,i);

            if (leftSum == rightSum)
            {
                Console.WriteLine(i);
                isEqual = true;
            }

        }

        if (!isEqual)
        {
            Console.WriteLine("no");
        }
    }

    public static int GetRighSum(int[] numbers, int i)
    {
        int rightSum = 0;
        for (int j = i + 1; j < numbers.Length; j++)
        {
            rightSum += numbers[j];
        }

        return rightSum;
    }

    public static int GetLeftSum(int [] numbers,int i)
    {
        int leftSum = 0;
        for (int j = i - 1; j >= 0; j--)
        {
            leftSum += numbers[j];
        }

        return leftSum;
    }
}

