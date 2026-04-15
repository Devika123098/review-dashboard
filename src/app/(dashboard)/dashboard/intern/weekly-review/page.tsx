"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInternStore } from "@/stores/intern-store";
import Loader from "@/app/loading";

type FormValues = {
  fullName: string;
  muid: string;
  weeklyReview: string;
};

export default function WeeklyReviewPage() {
  const userProfile = useInternStore((state) => state.userProfile);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      fullName: userProfile?.fullName || "",
      muid: userProfile?.muid || "",
      weeklyReview: "",
    },
  });

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader />
      </div>
    );
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">
            Weekly Review
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Submit your weekly review below
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className="bg-muted/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="muid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MUID</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className="bg-muted/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weeklyReview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weekly Review</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write your weekly review here..."
                        className="min-h-[200px] resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
