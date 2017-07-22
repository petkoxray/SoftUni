using System;

    public class Program
    {
        public static void Main()
        {
            int number = int.Parse(Console.ReadLine());
            for (int currentNum = 2; currentNum <= number; currentNum++)
            {
                bool isPrime = true;
                for (int devisior = 2; devisior <= Math.Sqrt(currentNum); devisior++)
                {
                    if (currentNum % devisior == 0)
                    {
                        isPrime = false;    
                    }
                }

                Console.WriteLine($"{currentNum} -> {isPrime}");
            }
        }
    }

