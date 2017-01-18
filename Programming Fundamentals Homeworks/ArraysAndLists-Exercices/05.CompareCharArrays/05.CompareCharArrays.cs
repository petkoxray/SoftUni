using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var firstArray = Console.ReadLine().Split().Select(char.Parse).ToArray();
        var secondArray = Console.ReadLine().Split().Select(char.Parse).ToArray();

        var firstArrayCount = 0;
        var secondArrayCount = 0;

        int shorterLen = Math.Min(firstArray.Length, secondArray.Length);
        bool isEqual = true;

        for (int i = 0; i < shorterLen; i++)
        {
            if (isEqual && firstArray[i] == secondArray[i])
            {
                continue;
            }
            else
            {
                isEqual = false;
                if (firstArray[i] > secondArray[i])
                {
                    firstArrayCount++;
                }
                else
                {
                    secondArrayCount++;
                }
            }
        }

        if (isEqual && firstArray.Length == secondArray.Length)
        {
            Console.WriteLine(string.Join("",firstArray));
            Console.WriteLine(string.Join("",secondArray));
        }
        else if (isEqual)
        {
            if (firstArray.Length > secondArray.Length)
            {
                Console.WriteLine(string.Join("", secondArray));
                Console.WriteLine(string.Join("", firstArray));
            }
            else
            {
                Console.WriteLine(string.Join("", firstArray));
                Console.WriteLine(string.Join("", secondArray));
            }
        }
        else
        {
            if (firstArrayCount < secondArrayCount)
            {
                Console.WriteLine(string.Join("", firstArray));
                Console.WriteLine(string.Join("", secondArray));
            }
            else
            {
                Console.WriteLine(string.Join("", secondArray));
                Console.WriteLine(string.Join("", firstArray));
            }
        }

    }
}

