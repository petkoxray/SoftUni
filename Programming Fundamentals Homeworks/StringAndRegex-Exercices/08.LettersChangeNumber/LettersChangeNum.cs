using System;
using System.Linq;

class LettersChangeNum
{
    static void Main()
    {
        var input = Console.ReadLine()
            .Split(new char[] { ' ','\t' }, StringSplitOptions.RemoveEmptyEntries).ToArray();
        var sum = 0.0;

        for (int i = 0; i < input.Length; i++)
        {
            sum += GetCurrentSum(input[i]);
        }

        Console.WriteLine($"{sum:f2}");
    }

    public static double GetCurrentSum(string currentStr)
    {
        var currentSum = 0.0;
        var firstLetter = currentStr.ElementAt(0);
        var lastLetter = currentStr.ElementAt(currentStr.Length - 1);
        var num = double.Parse(currentStr.Substring(1, currentStr.Length - 2));
        var firstIndex = char.ToUpper(firstLetter) - 64;
        var secondIndex = char.ToUpper(lastLetter) - 64;

        if (char.IsUpper(firstLetter))
        {
            num = num / firstIndex;
        }
        else
        {
            num = num * firstIndex;
        }

        if (char.IsUpper(lastLetter))
        {
            num = num - secondIndex;
        }
        else
        {
            num = num + secondIndex;
        }

        currentSum = num;
        return currentSum;
    }
}

