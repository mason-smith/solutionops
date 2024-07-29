export default async function Index() {
  return (
    <main className="p-4 lg:container lg:mx-auto">
      <h1 className="mt-14 text-4xl font-bold tracking-tight">
        Welcome to{' '}
        <span className="bg-gradient-to-br from-blue-600 to-pink-600 bg-clip-text font-extrabold text-transparent">
          SolutionOps
        </span>
      </h1>
      <section>
        <p className="mt-4">
          Some years ago I decided to leave the independent contracting life behind me and pursue full time employment.
        </p>
        <p className="mt-4">
          Now I am an Engineering Manager at Bamboo Rose. My inadvertent specialty is rearchitecting legacy codebases
          into modern, maintainable, and scalable web and cross-platform applications. I believe that people come first,
          and that happy engineers make happier customers.
        </p>
        <p className="mt-4">
          My schedule is pretty full these days but I am always open to new opportunities. If you have a project you
          would like to discuss, please reach out to me via{' '}
          <a href="mailto:mason.smith@solutionops.com" target="_blank" className="underline">
            email
          </a>
          , contact me on{' '}
          <a href="https://www.linkedin.com/in/mason-smith00/" target="_blank" className="underline">
            LinkedIn
          </a>
          , or reach out through{' '}
          <a href="https://github.com/mason-smith" target="_blank" className="underline">
            Github
          </a>
          .
        </p>
        <p className="mt-4">
          I am not active on social media but you can scope some small side projects and experiments on my{' '}
          <a href="https://github.com/mason-smith" target="_blank" className="underline">
            Github
          </a>
          .
        </p>
        <p className="mt-4">
          I have a personal site that is more up to date at{' '}
          <a href="https://masonsmith.dev" target="_blank" className="underline">
            masonsmith.dev
          </a>
          .
        </p>
      </section>
    </main>
  );
}
