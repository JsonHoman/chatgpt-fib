# chatgpt_fib
Creates an animation of a fibonacci spiral, created through prompts engineered on ChatGPT. The intention was to explore how well ChatGPT could adjust the code it generated through iteration. It was interesting to discover that context could be a detriment after a certain amount of time and iteration. I think of this dilemma, similar to when a programmer stuck, and walking away to clear their "cache" (working memory haha) so they can return to reanalyze pick up context, hopefully exposing a false  assumption. Basically, focused vs diffuse thinking.

## future
I would love to enable this application to visually "zoom" out so that we can watch the fibonacci spiral indefinitely. I'm conceptually stuck on how I would determine the rate that the squares would need to shrink in each frame. I have a feeling it would be one of the constant numbers in math like euler's number, but I'm not sure.

Also I wish I would've constructed to drawing logic to work in with angle in mind. I think it could be really cool to switch the squares into different shapes or images. I've read that sunflowers spread their leaves out using euler's number in such a way that it, most efficiently spaces out the leaves to get the most sunlight.

If performance becomes a problem, I think that memoization could significantly help if implemented. Also the Bottom-Up DP approach could be an option.