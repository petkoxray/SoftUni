using System;
using System.Collections.Generic;
using System.Linq;

class Dragon
{
    public string Name { get; set; }
    public double Damage { get; set; }
    public double Health { get; set; }
    public double Armor { get; set; }
}

class DragonArmy
{
    static void Main()
    {
        int numberOfDragons = int.Parse(Console.ReadLine());

        var dragons = new Dictionary<string, List<Dragon>>();

        for (int i = 0; i < numberOfDragons; i++)
        {
            var input = Console.ReadLine();
            var args = input.Split().ToArray();
            var type = args[0];
            var dragon = ReadDragon(args);

            if (!dragons.ContainsKey(type))
            {
                var dragonList = new List<Dragon>();
                dragonList.Add(dragon);
                dragons.Add(type, dragonList);
            }
            else
            {
                if (!dragons[type].Any(drg => drg.Name == dragon.Name))
                {
                    dragons[type].Add(dragon);
                }
                else
                {
                    dragons[type].Remove(dragons[type].First(drg => drg.Name == dragon.Name));
                    dragons[type].Add(dragon);
                }
            }
        }

        PrintDragons(dragons);
    }

    private static void PrintDragons(Dictionary<string, List<Dragon>> dragons)
    {
        foreach (var dragonType in dragons)
        {
            var averageDamage = dragonType.Value.Average(d => d.Damage);
            var averageHealth = dragonType.Value.Average(d => d.Health);
            var averageArmor = dragonType.Value.Average(d => d.Armor);
            Console.WriteLine($"{dragonType.Key}::({averageDamage:f2}/{averageHealth:f2}/{averageArmor:f2})");
            var drgs = dragonType.Value;
            PrintDragonsInCurrentType(drgs);
        }
    }

    private static void PrintDragonsInCurrentType(List<Dragon> drgs)
    {
        foreach (var dragon in drgs.OrderBy(d => d.Name))
        {
            Console.WriteLine($"-{dragon.Name} -> damage: {dragon.Damage}, health: {dragon.Health}, armor: {dragon.Armor}");
        }
    }

    private static Dragon ReadDragon(string[] args)
    {
        var name = args[1];
        var damage = 45.0;
        var health = 250.0;
        var armor = 10.0;

        if (args[2] != "null")
        {
            damage = double.Parse(args[2]);
        }
        if (args[3] != "null")
        {
            health = double.Parse(args[3]);
        }
        if (args[4] != "null")
        {
            armor = double.Parse(args[4]);
        }

        var dragon = new Dragon() {Name = name,Damage = damage,Health = health,Armor = armor };

        return dragon;
    }
}

