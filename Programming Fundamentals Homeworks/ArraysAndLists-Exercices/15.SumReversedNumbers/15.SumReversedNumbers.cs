using System;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split();

        int sum = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            int reversedNumber = GetReversedNumber(numbers[i]);
            sum += reversedNumber;
        }

        Console.WriteLine(sum);
    }

    private static int GetReversedNumber(string currentNum)
    {
        string reversedNumStr = "";

        for (int i = currentNum.Length - 1; i >= 0; i--)
        {
            reversedNumStr += currentNum[i];
        }

        int reversedNum = int.Parse(reversedNumStr);

        return reversedNum;
    }
}

