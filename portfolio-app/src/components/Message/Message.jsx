import React from 'react';

const Message = () => {
    return (
        <section className="md:h-screen flex items-center justify-center px-4 py-16 bg-gray-100 dark:bg-gray-950   ">
            <div className="w-full max-w-2xl light:bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50  dark:bg-gray-800 shadow-xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Send a Message</h2>

                {/* Form begins */}
                <form
                    action="https://formspree.io/f/mgegdbav" // 🔁 Replace with your Formspree ID
                    method="POST"
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message..."
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Message;
