using System;
using System.Text;

class SumBigNums
{
    static void Main()
    {
        string firstNum = Console.ReadLine().TrimStart(new char[] { '0' });
        string secondNum = Console.ReadLine().TrimStart(new char[] { '0' });
        StringBuilder result = new StringBuilder();

        if (firstNum.Length > secondNum.Length)
        {
            secondNum = secondNum.PadLeft(firstNum.Length, '0');
        }
        else if (firstNum.Length < secondNum.Length)
        {
            firstNum = firstNum.PadLeft(secondNum.Length, '0');
        }

        char[] str1 = firstNum.ToCharArray();
        char[] str2 = secondNum.ToCharArray();

        sbyte remainder = 0;
        sbyte addition = 0;

        for (int i = str1.Length - 1; i >= 0; i--)
        {
            sbyte num1 = sbyte.Parse(str1[i].ToString());
            sbyte num2 = sbyte.Parse(str2[i].ToString());
            num1 += addition;
            addition = 0;
            if (num1 + num2 < 10)
            {
                result.Append(num1 + num2);
            }
            else
            {
                remainder = (sbyte)((num1 + num2) % 10);
                result.Append(remainder);
                addition = (sbyte)((num1 + num2) / 10);
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


