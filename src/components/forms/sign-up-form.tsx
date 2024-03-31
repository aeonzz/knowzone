"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Userr } from "@/components/table/user-columns";
import { updateUser } from "@/lib/server-actions/user.actions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ResetPasswordForm from "./reset-password-form";

const FormSchema = z
  .object({
    email: z.string().email().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    studentId: z.string().min(10, {
      message: "student id must be at least 10 characters.",
    }),
    firstName: z.string().min(1, {
      message: "firstname id must be at least 1 characters.",
    }),
    middleName: z.string().min(1, {
      message: "middle id must be at least 1 characters.",
    }),
    lastName: z.string().min(1, {
      message: "lastname id must be at least 1 characters.",
    }),
    role: z.string({
      required_error: "Please select a role for this user.",
    }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

interface SignUpFormProps {
  setIsOpen: (state: boolean) => void;
  setOpenModal?: (state: boolean) => void;
  editData?: Userr | undefined;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  setIsOpen,
  editData,
  setOpenModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const studentIdString = editData?.studentId.toString();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: editData?.email || "",
      studentId: studentIdString || "",
      firstName: editData?.firstName || "",
      middleName: editData?.middleName || "",
      lastName: editData?.lastName || "",
      role: editData?.role || "",
      password: editData?.password || "",
      confirmPassword: editData?.password || "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    if (editData) {
      const updateData = {
        ...data,
        userId: editData.id,
      };

      const response = await updateUser(updateData);

      if (response.status === 200) {
        router.refresh();
        setIsOpen(false);
        if (setOpenModal) {
          setOpenModal(false);
        }
      } else {
        setIsLoading(false);
        toast.error("Uh oh! Something went wrong.", {
          description:
            "An error occurred while making the request. Please try again later",
        });
      }
    } else {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            studentId: data.studentId,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            role: data.role,
            password: data.password,
            confirmPassword: data.confirmPassword,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          toast.success("Registration Successful", {
            description: data.message,
          });
          router.refresh();
          setIsOpen(false);
        } else if (response.status === 409) {
          const data = await response.json();

          setIsLoading(false);

          toast.error("Uh oh! Something went wrong.", {
            description: data.message,
          });
        } else {
          setIsLoading(false);
          toast.error("Uh oh! Something went wrong.", {
            description: "There was a problem with your request.",
          });
        }
      } catch (error) {
        setIsLoading(false);

        console.error("An error occurred while making the request:", error);

        toast.error("Uh oh! Something went wrong.", {
          description: "An error occurred while making the request.",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-1">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between gap-3">
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student id</FormLabel>
                <FormControl>
                  <Input placeholder="id" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select roles"
                        className="flex-1"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="User">User</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="firstname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle name</FormLabel>
                <FormControl>
                  <Input placeholder="middlename" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="lastname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {editData ? (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="!mt-3">
                  Reset Password
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[400px]">
                <DialogHeader>
                  <DialogTitle>Password reset</DialogTitle>
                  <DialogDescription>
                    Please provide a new password
                  </DialogDescription>
                </DialogHeader>
                <ResetPasswordForm />
              </DialogContent>
            </Dialog>
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-Enter your password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-Enter your password"
                      type="password"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <Button type="submit" className="!mt-3 w-full" disabled={isLoading}>
          Confirm
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
