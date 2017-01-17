using System;

class Program
{
    static void Main()
    {
        var firstArray = Console.ReadLine().Split();
        var secondArray = Console.ReadLine().Split();

        int minLen = Math.Min(firstArray.Length, secondArray.Length);
        int rightCount = 0;
        int leftCount = 0;

        for (int i = 0; i < minLen; i++)
        {
            if (firstArray[i] == secondArray[i])
            {
                leftCount++;
            }
        }

        for (int i = 1; i <= minLen; i++)
        {
            if (firstArray[firstArray.Length - i] == secondArray[secondArray.Length - i])
            {
                rightCount++;
            }
        }

        Console.WriteLine(Math.Max(rightCount,leftCount));
    }
}

