using System;

class Program
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        FindPrimes(n);
    }

    private static void FindPrimes(int n)
    {
        bool[] primes = new bool[n + 1];

        for (int i = 2; i < primes.Length; i++)
        {
            primes[i] = true;
        }

        for (int i = 2; i < primes.Length; i++)
        {
            if (!primes[i])
            {
                continue;
            }

            Console.Write($"{i} ");

            for (int j = i + i; j < primes.Length; j+=i)
            {
                primes[j] = false;
            }
        }
    }
}

