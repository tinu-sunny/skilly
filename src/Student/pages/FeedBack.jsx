import React from "react";
import StudentHeader from "../components/StudentHeader";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import AppFooter from "../../components/AppFooter";
import { Rating, RatingStar } from "flowbite-react";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

function FeedBack() {
  //   rating
  const [fill, setFill] = useState(0);
  const [hover, setHover] = useState(0);

  //
  const [review, setReview] = useState(0);

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Header */}

        <div className="fixed">
          <StudentHeader />
        </div>

        {/* DashBoard content */}
        <div className="p-10 w-full sm:ml-50">
          {/* welcome message with name */}
          <section className="mb-8">
            <h1 className="text-[#111418] text-4xl font-bold leading-tight mb-3 ">
              We Value You
            </h1>
            <p className="text-slate-500 font-medium leading-tight mb-5">
              Your feedback helps us build a better platform for your career
              journey.Let us Know what's working
              <br /> and where we can Improve
            </p>
          </section>

          {/* FeedBack Form */}

          <section>
            <div className="flex items-center justify-evenly">
              <div className="w-200 bg-slate-100 shadow-2xl p-5 flex flex-col gap-5">
                <label className="font-bold text-[#111418] leading-tight text-2xl">
                  FeedBack Type
                </label>

                <div className="bg-gray-100 flex flex-row justify-evenly items-center ">
                  <p
                    className={
                      review == 0
                        ? "bg-blue-600 text-white p-2 rounded-2xl cursor-pointer"
                        : "cursor-pointer"
                    }
                    onClick={() => setReview(0)}
                  >
                    General Comment
                  </p>
                  <p
                    className={
                      review == 1
                        ? "bg-blue-600 text-white p-2 rounded-2xl cursor-pointer"
                        : "cursor-pointer"
                    }
                    onClick={() => setReview(1)}
                  >
                    Feature Request{" "}
                  </p>
                  <p
                    className={
                      review == 2
                        ? "bg-blue-600 text-white p-2 rounded-2xl cursor-pointer"
                        : "cursor-pointer"
                    }
                    onClick={() => setReview(2)}
                  >
                    Bug Report{" "}
                  </p>
                </div>

                {/* rateing */}
                {review == 0 ? (
                  <div>
                    <h1 className="text-[#111418] font-medium mb-3">
                      How would You rate your experience ?
                    </h1>
                    <Rating size="md">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <RatingStar
                          key={star}
                          filled={star <= (hover || fill)}
                          onClick={() => setFill(star)}
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                        />
                      ))}
                    </Rating>
                  </div>
                ) : (
                  ""
                )}

                {/* messaage box */}

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="text-[#111418] text-xl font-bold"
                  >
                    Tell us{" "}
                  </label>
                  <Textarea
                    rows={5}
                    placeholder={
                      review == 0
                        ? "Share details of your own Experience"
                        : review == 1
                        ? "Tell Your idea"
                        : "what is  the issue you are facing"
                    }
                  />
                </div>
                {/* uploading image or screen shots of the bug */}
                {review == 2 ? (
                  <div className="flex flex-col gap-3">
                    <label className="text-[#111418] text-xl font-bold">
                      Attach your screenshot (optinal)
                    </label>
                    <TextInput type="file"></TextInput>
                  </div>
                ) : (
                  ""
                )}

                <div className="flex gap-4 justify-end">
                  <Button variant="outline" color={"alternative"}>
                    Cancel
                  </Button>
                  <Button>
                    Send FeedBack <IoSendSharp />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* footer */}
      <div className="mt-10">
        {" "}
        <AppFooter />
      </div>
    </>
  );
}

export default FeedBack;
