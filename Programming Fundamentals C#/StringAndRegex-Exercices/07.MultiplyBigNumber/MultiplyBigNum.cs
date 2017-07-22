using System;
using System.Text;

class MultiplyBigNum
{
    static void Main()
    {
        var firstNum = Console.ReadLine().TrimStart(new char[] { '0' });
        var secondNum = int.Parse(Console.ReadLine());
        var result = new StringBuilder();

        if (secondNum == 0)
        {
            Console.WriteLine("0");
            return;
        }
        else if (secondNum == 1)
        {
            Console.WriteLine(firstNum);
            return;
        }

        var firstNums = firstNum.ToCharArray();

        var remainder = 0;
        var addition = 0;

        for (int i = firstNums.Length - 1; i >= 0; i--)
        {
            var num1 = int.Parse(firstNums[i].ToString());
            var multiplying = num1 * secondNum + addition;
            addition = 0;
            if (multiplying < 10)
            {
                result.Append(multiplying);
            }
            else
            {
                remainder = (int)((multiplying) % 10);
                result.Append(remainder);
                addition = (int)((multiplying) / 10);
            }
        }

        if (addition != 0)
        {
            result.Append(addition);
        }

        char[] endResult = result.ToString().ToCharArray();
        Array.Reverse(endResult);

        Console.WriteLine(string.Join("", endResult));
    }
}

