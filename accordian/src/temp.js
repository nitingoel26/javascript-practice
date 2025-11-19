useEffect(() => {
    const fetchOffers = async (
      cohortName: string,
    ): Promise<GetOffersAPIResponseType | null> => {
      if (!cohortName) return null;

      try {
        const url = `/api/v1/user/offers?cohortName=${encodeURIComponent(cohortName)}`;
        const response = await http<GetOffersAPIResponseType>({
          url,
          method: 'GET',
        });
        return response.data;
      } catch (e) {
        const error = e as AxiosError;
        console.error('Error fetching offers:', error.response?.data);
        return null;
      }
    };

    const processItem = async (item: any) => {
      if (!cohortsList.includes(item.cohortName)) {
        return {
          ...item,
          cohortName: '',
          cohortDescription: '',
          offerId: '',
          manualOfferId: '',
          offerDescription: '',
        };
      }

      const response = await fetchOffers(item.cohortName);
      if (!response) {
        return {
          ...item,
          cohortDescription: cohortDescriptionMap?.[item.cohortName] || '',
          offerId: '',
          manualOfferId: '',
          offerDescription: '',
        };
      }

      const matchingOffer = response.data.find((data) => {
        return data._id === item.offerId || data._id.split(':')[1] == item.offerId;
      });
      return {
        ...item,
        cohortDescription: cohortDescriptionMap?.[item.cohortName] || '',
        offerDescription: matchingOffer?.customerDisplayText || '',
        ...(matchingOffer ? {} : { offerId: 'Other', manualOfferId: item.offerId }),
      };
    };

    const handleData = async () => {
      if (!(uploadedCsvData.length > 0 && cohorts.length > 0)) return;

      try {
        const modifiedCsv = await Promise.all(
          uploadedCsvData.filter((item: any) => item.cohortName).map(processItem),
        );
        const validRows = modifiedCsv.filter(Boolean);
        methods.reset(
          {
            rows: [...getValues('rows'), ...validRows],
          },
          { keepErrors: true },
        );
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };

    handleData();
  }, [uploadedCsvData, cohorts, cohortsList, cohortDescriptionMap, methods, getValues]);