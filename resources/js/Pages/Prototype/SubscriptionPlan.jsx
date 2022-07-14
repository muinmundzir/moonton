import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

const SubscriptionPlan = () => {
    return (
        <Authenticated>
            <div>
                <div className="py-10 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>

                    <div className="flex justify-center gap-10 mt-[70px]">
                        <SubscriptionCard
                            id="basic"
                            name="Basic"
                            price={299000}
                            durationInMonth="3"
                            features={["Feature 1", "Feature 2", "Feature 3"]}
                        />

                        <SubscriptionCard
                            isPremium
                            id="premium"
                            name="Premium"
                            price={899000}
                            durationInMonth="6"
                            features={[
                                "Feature 1",
                                "Feature 2",
                                "Feature 3",
                                "Feature 4",
                                "Feature 5",
                                "Feature 6",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default SubscriptionPlan;
