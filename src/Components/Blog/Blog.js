import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4  mx-auto">
      <div className="collapse border border-rose-600 mb-2 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-800  flex justify-between peer-checked:bg-gray-900 peer-checked:text-secondary-content">
          Difference between SQL and NoSQL
          <p className="text-3xl">+</p>
        </div>
        <div className="collapse-content bg-gray-800  peer-checked:bg-gray-900  peer-checked:text-gray-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL. <br />
            SQL databases can be scaled horizontally as well, though sharding or
            partitioning logic is often the user’s onus and not well supported.
            NoSQL technologies are diverse and while many rely on the
            master-slave architecture, options for scaling vertically also
            exist.
          </p>
        </div>
      </div>
      <div className="collapse border border-rose-600 mb-2 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-800  flex justify-between peer-checked:bg-gray-900 peer-checked:text-secondary-content">
          What is JWT, and how does it work?
          <p className="text-3xl">+</p>
        </div>
        <div className="collapse-content bg-gray-800  peer-checked:bg-gray-900  peer-checked:text-gray-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. <br />
            How it Works: <br />
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
            <br />
            User sign-in using username and password or google/facebook.
            Authentication server verifies the credentials and issues a jwt
            signed using either a secret salt or a private key. <br />
            User's Client uses the JWT to access protected resources by passing
            the JWT in HTTP Authorization header. <br />
            Resource server then verifies the authenticity of the token using
            the secret salt/ public key.
          </p>
        </div>
      </div>
      <div className="collapse border border-rose-600 mb-2 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-800  flex justify-between peer-checked:bg-gray-900 peer-checked:text-secondary-content">
          What is the difference between javascript and NodeJS?
          <p className="text-3xl">+</p>
        </div>
        <div className="collapse-content bg-gray-800  peer-checked:bg-gray-900  peer-checked:text-gray-content">
          <p>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.{" "}
            <br />
            Javascript is a programming language that is used for writing
            scripts on the website. <br />
            Javascript is capable enough to add HTML and play with the DOM.{" "}
            <br />
            Nodejs does not have capability to add HTML tags.
          </p>
        </div>
      </div>
      <div className="collapse border border-rose-600 mb-2 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-gray-800  flex justify-between peer-checked:bg-gray-900 peer-checked:text-secondary-content">
          How does NodeJS handle multiple requests at the same time?
          <p className="text-3xl">+</p>
        </div>
        <div className="collapse-content bg-gray-800  peer-checked:bg-gray-900  peer-checked:text-gray-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue.
            <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module. <br />
            If your system has 8 CPU then 8 NodeJS instances will be created and
            every instance has its own independent event loop. Now NodeJS can
            process all request parallelly. They are all share same port (PORT
            3000) but not state. The master process listens on a port, accepts
            new connections and distributes them across the workers in a
            round-robin fashion, with some built-in smarts to avoid overloading
            a worker process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
