using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EqualSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            int leftSum = 0;
            int rightSum = 0;

            if (numbers.Length < 2)
            {
                Console.WriteLine("0");
            }
            else
            {

                for (int i = 0; i < numbers.Length; i++)
                {
                    leftSum += numbers[i];

                    for (int j = i + 2; j < numbers.Length; j++)
                    {
                        rightSum += numbers[j];

                    }
                    if (leftSum != rightSum)
                    {
                        rightSum = 0;
                    }
                    else
                    {
                        Console.WriteLine(i + 1);
                        break;
                    }

                }
                if (leftSum != rightSum)
                {
                    Console.WriteLine("no");
                }
            }
        }
    }



}