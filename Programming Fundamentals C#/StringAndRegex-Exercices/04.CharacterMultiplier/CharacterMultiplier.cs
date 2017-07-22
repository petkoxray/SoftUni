using System;

class CharacterMultiplier
{
    static void Main()
    {
        var input = Console.ReadLine().Split();
        var firstStr = input[0];
        var secondStr = input[1];

        long sum = GetSum(firstStr,secondStr);

        Console.WriteLine(sum);
    }

    public static long GetSum(string firstStr, string secondStr)
    {
        long sum = 0;
        var minlen = Math.Min(firstStr.Length, secondStr.Length);
        var maxlen = Math.Max(firstStr.Length, secondStr.Length);
        var longerStr = "";
        if (firstStr.Length > secondStr.Length)
        {
            longerStr = firstStr;
        }
        else
        {
            longerStr = secondStr;
        }

        for (int i = 0; i < Math.Min(firstStr.Length,secondStr.Length); i++)
        {
             sum += firstStr[i] * secondStr[i];
        }

        for (int i = maxlen - 1; i >= minlen; i--)
        {
            sum += longerStr[i];
        }

        return sum;
    }
}

