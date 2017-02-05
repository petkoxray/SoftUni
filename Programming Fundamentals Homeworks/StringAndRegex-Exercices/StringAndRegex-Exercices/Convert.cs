using System;
using System.Linq;
using System.Numerics;

class Convert
{
    static void Main()
    {
        var input = Console.ReadLine().Split().Select(BigInteger.Parse).ToArray();
        var n = (int)input[0];
        var number = input[1];
        BigInteger rem = 0;
        var result = "";

        if (n >= 2 && n <= 10)
        {
            while (number > 0)
            {
                rem = number % n;
                number =number / n;

                result = rem.ToString() + result;
            }

            Console.WriteLine(result);
        }

        else
        {
            Console.WriteLine(0);
        }
    }
}

