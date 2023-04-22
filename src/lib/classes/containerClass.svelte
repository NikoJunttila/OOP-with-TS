<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<CodeBlock language="ts" code={`class Animals {
    private animals: Animal[] = [];

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    removeAnimal(name: string) {
        this.animals = this.animals.filter((animal) => animal.name !== name);
    }

    getAnimal(name: string): Animal | undefined {
        return this.animals.find((animal) => animal.name === name);
    }

    getAllAnimals(): Animal[] {
        return this.animals;
    }
}`}></CodeBlock>
