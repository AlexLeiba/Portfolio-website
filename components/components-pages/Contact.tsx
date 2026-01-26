"use client";
import React, { useState } from "react";
import { Spacer } from "../UI/spacer/spacer";
import { Col, Container, Row } from "../UI/Grid";
import { Button } from "../UI/Button/Button";
import Link from "next/link";
import { Input } from "../UI/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { Input as InputTextarea } from "../UI/Input/Input";
import { cn } from "@/lib/utils";
import { contactSchema, type FormDataType } from "@/lib/schemas";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formMethods = useForm<FormDataType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = formMethods;

  async function onSubmit(formData: FormDataType) {
    const url = process.env.NEXT_PUBLIC_FORM_URL;
    try {
      setIsSubmitting(true);
      if (url) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("The message was sent successfully!");
          reset();
        }
      } else {
        toast.error("Error sending the message. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Row className="flex flex-col">
      <Container id="contact" spacing="none">
        <Row>
          <Col lgOffset={2} lg={8}>
            <div className="flex justify-center ">
              <h2 className="text-center" data-aos="fade-left">
                Cont
              </h2>
              <h2 className=" text-primary-400" data-aos="fade-right">
                act
              </h2>
            </div>
          </Col>
        </Row>

        <Spacer size={16} />
        <Row>
          <Col
            lg={4}
            className="flex flex-col justify-between sm:gap-4 md:gap-6"
          >
            <Link
              rel="noopener noreferrer"
              title="Gmail"
              data-aos="fade-up"
              href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}
              className="flex gap-2 items-center animate-pulse"
              target="_blank"
            >
              <div className="flex flex-col gap-1 items-center">
                <Mail width={60} height={60} className="shadow-xl rounded-lg" />
                <p className="body-xs !font-bold text-primary-500">Gmail</p>
              </div>
              <div className="flex gap-4 items-center">
                <p>{`${process.env.NEXT_PUBLIC_EMAIL_URL?.replace(
                  "mailto:",
                  "",
                )}`}</p>
              </div>
            </Link>

            <Link
              rel="noopener noreferrer"
              title="Linkedin"
              data-aos="fade-up"
              className="flex gap-2 items-center animate-pulse"
              href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
              target="_blank"
            >
              <div className="flex flex-col gap-1 items-center">
                <Linkedin
                  width={60}
                  height={60}
                  className="shadow-xl rounded-lg"
                />

                <p className="body-xs !font-bold text-primary-500">Linkedin</p>
              </div>
              <div className="flex gap-4 items-center">
                <p>Alex Leiba</p>
              </div>
            </Link>

            <Link
              rel="noopener noreferrer"
              title="Github"
              data-aos="fade-up"
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
              className="flex gap-2 items-center animate-pulse"
              target="_blank"
            >
              <div className="flex flex-col gap-1 items-center">
                <Github
                  width={60}
                  height={60}
                  className="shadow-xl rounded-lg"
                />
                <p className="body-xs !font-bold text-primary-500">Github</p>
              </div>
              <div className="flex gap-4 items-center">
                <p>AlexLeiba</p>
              </div>
            </Link>
            <Spacer md={12} sm={8} />
          </Col>
          <Col lg={8}>
            <div
              className="rounded-lg bg-baseline-100 p-4 dark:bg-baseline-900 shadow-xl"
              data-aos="fade-up"
            >
              <p className="inline !text-2xl">Contact</p>
              <p className="inline text-primary-400 !text-2xl"> me</p>
              <Spacer size={2} />
              <p className="inline">Send me a message and </p>
              <p className="inline text-primary-400">let`s get in touch!</p>
              <Spacer size={4} />

              <Row>
                <Col lg={6} md={2} className="flex flex-col gap-2">
                  <Input
                    iconHelpText="Your First Name"
                    {...register("firstName")}
                    type={"text"}
                    placeholder={"Type here"}
                    className={""}
                    label={"First Name *"}
                    error={errors.firstName?.message}
                  />
                  <Input
                    iconHelpText="Your Last name"
                    {...register("lastName")}
                    type={"text"}
                    placeholder={"Type here"}
                    className={""}
                    label={"Last Name"}
                    error={errors.lastName?.message}
                  />
                </Col>
                <Col lg={6} md={2} className="flex flex-col gap-2">
                  <div className="sm:h-1 md:hidden lg:hidden"></div>
                  <Input
                    iconHelpText="Your email address"
                    {...register("email")}
                    type={"email"}
                    placeholder={"Type here"}
                    className={""}
                    label={"Email *"}
                    error={errors.email?.message}
                  />

                  <Input
                    iconHelpText="Your phone number"
                    {...register("phone")}
                    type={"phone"}
                    placeholder={"Type here"}
                    className={""}
                    label={"Phone"}
                    error={errors.phone?.message}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-4">
                  <InputTextarea
                    {...register("message")}
                    type={"textarea"}
                    placeholder={"Type here"}
                    className={cn("")}
                    label={"Your Message *"}
                    error={errors.message?.message}
                  />

                  <Spacer size={8} />
                  <Button
                    title="Send message"
                    loading={isSubmitting}
                    onClick={handleSubmit(onSubmit)}
                    variant={"baseline"}
                    className={cn(
                      "w-full",
                      isSubmitting ? "opacity-60" : "animate-pulse",
                    )}
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Spacer size={24} />
    </Row>
  );
}

export default Contact;
