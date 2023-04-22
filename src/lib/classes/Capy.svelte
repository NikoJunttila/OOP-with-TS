<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<CodeBlock language="ts" code={`class Capybara extends Animal {
    constructor(
        public name: string,
        public age: number,
        public size: string,
        public image: string
    ) {
        super('Capybara', name, age, image);
    }

    pullup() {
        console.log('ok i pull up');
        toastStore.trigger(pullup);
        const audio = new Audio(pullupmp3);
  		audio.play();
    }
}`}></CodeBlock>