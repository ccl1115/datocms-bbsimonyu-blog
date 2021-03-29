import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row gap-x-10 items-center">
          <p class="text-blue-800 shadow-sm px-3 py-1 bg-white rounded-sm hover:shadow-lg transition-shadow">
            <a href="https://portfolio.bbsimonyu.com">My portfolio</a>
          </p>
          <p class="text-blue-800 shadow-sm px-3 py-1 bg-white rounded-sm hover:shadow-lg transition-shadow">
            <a href="https://thumb.bbsimonyu.com">Thumb Launcher App</a>
          </p>
          <p class="text-blue-800 shadow-sm px-3 py-1 bg-white rounded-sm hover:shadow-lg transition-shadow">
            <a href="https://github.com/ccl1115">@Github</a>
          </p>
          <p>© 2021 All rights reserved by Simon Yu</p>
        </div>
      </Container>
    </footer>
  );
}
